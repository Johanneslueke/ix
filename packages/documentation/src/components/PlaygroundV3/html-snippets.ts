/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TargetFramework } from '../PlaygroundV2/framework-types';
import { getBranchPath } from '../PlaygroundV2/utils';
import { docusaurusFetch } from './fetching';

export async function fetchSourceForHtml(baseUrl: string, name: string) {
  const snippets: Record<string, string> = {};
  const htmlFile = await docusaurusFetch(`${baseUrl}/${name}.html`, true);

  snippets[`${name}.html`] = htmlFile;

  const regex =
    /<link\s*rel=\"stylesheet\"\s*href=['"]\.\/styles\/([^'"]+)['"]\s* \/>/;
  const match = htmlFile.match(regex);

  if (match) {
    const styleFile = await docusaurusFetch(`${baseUrl}/styles/${match[1]}`);

    if (styleFile) {
      snippets[`./styles/${match[1]}`] = styleFile;
    }
  }

  return snippets;
}

export function getJavascriptTestAppGithubPath(name: string) {
  const base = getBranchPath(TargetFramework.JAVASCRIPT);

  return `${base}/src/preview-examples/${name}.html`;
}