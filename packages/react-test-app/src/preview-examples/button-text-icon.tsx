/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxButton, IxIcon } from '@siemens/ix-react';
import React from 'react';

export const ButtonsTextIcon: React.FC = () => {
  return (
    <>
      <IxButton class="m-1" variant="Primary">
        <IxIcon name="star"></IxIcon>Button
      </IxButton>
      <IxButton class="m-1" variant="Secondary">
        <IxIcon name="star"></IxIcon>Button
      </IxButton>
      <IxButton class="m-1" outline>
        <IxIcon name="star"></IxIcon>Button
      </IxButton>
      <IxButton class="m-1" ghost>
        <IxIcon name="star"></IxIcon>Button
      </IxButton>
    </>
  );
};