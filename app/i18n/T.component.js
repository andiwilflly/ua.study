import React from 'react';
import { Text } from 'native-base';
import { useTranslation } from 'react-i18next';


export default function T({ children }) {
	const { t } = useTranslation();
	return <Text>{ t(children) }</Text>
}
