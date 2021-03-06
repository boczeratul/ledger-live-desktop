// @flow
import React, { PureComponent } from 'react'
import { translate, Trans } from 'react-i18next'
import { colors } from 'styles/theme'
import { i } from 'helpers/staticPath'

import Box from 'components/base/Box'
import Text from 'components/base/Text'

import type { T } from 'types/common'

import IconChevronRight from 'icons/ChevronRight'

import { getDeviceModel } from '@ledgerhq/devices'
import { IconOptionRow, DisclaimerBox, OptionRow, Inner } from '../../helperComponents'

type Props = {
  t: T,
}

class SelectPIN extends PureComponent<Props, *> {
  render() {
    const { t } = this.props

    const stepsLedgerBlue = [
      {
        key: 'step1',
        icon: <IconOptionRow>{'1.'}</IconOptionRow>,
        desc: t('onboarding.selectPIN.initialize.instructions.blue.step1', getDeviceModel('blue')),
      },
      {
        key: 'step2',
        icon: <IconOptionRow>{'2.'}</IconOptionRow>,
        desc: (
          <Box style={{ display: 'block' }}>
            <Trans i18nKey="onboarding.selectPIN.initialize.instructions.blue.step2">
              {'Tap on'}
              <Text ff="Open Sans|SemiBold" color="dark">
                {'Configure as new device'}
              </Text>
            </Trans>
          </Box>
        ),
      },
      {
        key: 'step3',
        icon: <IconOptionRow>{'3.'}</IconOptionRow>,
        desc: t('onboarding.selectPIN.initialize.instructions.blue.step3'),
      },
    ]

    const disclaimerNotes = [
      {
        key: 'note1',
        icon: <IconChevronRight size={12} style={{ color: colors.smoke }} />,
        desc: t('onboarding.selectPIN.disclaimer.note1'),
      },
      {
        key: 'note2',
        icon: <IconChevronRight size={12} style={{ color: colors.smoke }} />,
        desc: t('onboarding.selectPIN.disclaimer.note2'),
      },
      {
        key: 'note3',
        icon: <IconChevronRight size={12} style={{ color: colors.smoke }} />,
        desc: t('onboarding.selectPIN.disclaimer.note3'),
      },
    ]

    return (
      <Box align="center">
        <Inner style={{ width: 550 }}>
          <Box style={{ width: 180, justifyContent: 'center', alignItems: 'center' }}>
            <img alt="" src={i('select-pin-blue-onb.svg')} />
          </Box>
          <Box>
            <Box shrink grow flow={4}>
              {stepsLedgerBlue.map(step => <OptionRow key={step.key} step={step} />)}
            </Box>
          </Box>
        </Inner>
        <DisclaimerBox mt={6} disclaimerNotes={disclaimerNotes} />
      </Box>
    )
  }
}

export default translate()(SelectPIN)
