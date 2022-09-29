import PropTypes from 'prop-types';
import {
  Box, Button, useColorModeValue,
} from '@chakra-ui/react';
// import { useRouter } from 'next/router';
import { useState, useEffect, Fragment } from 'react';
// import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Heading from '../../common/components/Heading';
import Icon from '../../common/components/Icon';
import Text from '../../common/components/Text';

const Pricing = ({ data }) => {
  // const { t } = useTranslation('common');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedFinanceIndex, setSelectedFinanceIndex] = useState(0);
  const [selectedProps, setSelectedProps] = useState(data?.pricing?.list[0] || {});
  const featuredBg = useColorModeValue('featuredLight', 'featuredDark');
  const router = useRouter();

  const financeSelected = {
    0: 'list',
    1: 'finance',
  };
  const financeValue = `${financeSelected[selectedFinanceIndex]}`;
  const selectedItem = data?.pricing[financeValue][selectedIndex];

  console.log('selectedProps:', selectedProps);

  const handleSelect = (dataProps, index) => {
    setSelectedProps(dataProps);
    setSelectedIndex(index);
  };
  const handleSelectFinance = (index) => {
    setSelectedFinanceIndex(index);
    setSelectedIndex(0);
  };

  useEffect(() => {
    if (selectedFinanceIndex === 0) {
      setSelectedProps(data?.pricing?.list[0]);
    } else {
      setSelectedProps(data?.pricing?.finance[0]);
    }
  }, [selectedFinanceIndex]);

  return (
    <Box maxW="container.xl" display="flex" width="100%" flexDirection="row" alignItems={{ base: 'center', md: 'start' }} gridGap="21px" m="36px auto 20px auto" justifyContent="center" height="100%">

      <Box display="flex" flex={0.5} flexDirection="column" w="100%" gridGap="10px">
        <Heading size="l" mb="32px">
          {data?.pricing?.title}
        </Heading>
        {data?.pricing?.description && (
          <Text
            size="md"
            width="80%"
            fontWeight="500"
            dangerouslySetInnerHTML={{ __html: data?.pricing?.description }}
          />
        )}
        <Box fontSize="13px" textTransform="uppercase" fontWeight="700" color="blue.default" mb="5px">
          {selectedItem?.bullets?.title}
        </Box>
        <Box as="ul" style={{ listStyle: 'none' }} display="flex" flexDirection="column" gridGap="12px">
          {selectedItem?.bullets?.list?.map((bullet) => (
            <Box as="li" key={bullet?.title} display="flex" flexDirection="row" lineHeight="24px" gridGap="8px">
              <Icon icon="checked2" color="#38A56A" width="13px" height="10px" style={{ margin: '8px 0 0 0' }} />
              <Box
                fontSize="14px"
                fontWeight="600"
                letterSpacing="0.05em"
                dangerouslySetInnerHTML={{ __html: bullet?.title }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box display="flex" flex={0.5} flexDirection="column" gridGap="20px">
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center" mb="6px">
          <Heading as="h2" size="sm">
            Choose yout plan
          </Heading>
          <Box display="flex">
            <Box p="15px 10px" onClick={() => handleSelectFinance(0)} borderBottom="4px solid" borderColor={selectedFinanceIndex === 0 ? 'blue.default' : 'gray.400'} color={selectedFinanceIndex === 0 ? 'blue.default' : 'black'} cursor="pointer">
              One payment
            </Box>
            <Box p="15px 10px" onClick={() => handleSelectFinance(1)} borderBottom="4px solid" borderColor={selectedFinanceIndex === 1 ? 'blue.default' : 'gray.400'} color={selectedFinanceIndex === 1 ? 'blue.default' : 'black'} cursor="pointer">
              Finance
            </Box>
          </Box>
        </Box>
        {data?.pricing[financeValue].filter((l) => l.show === true).map((item, i) => (
          <Fragment key={`${item.title} ${item?.price}`}>
            {data?.pricing[financeValue]?.length - 1 === i && (
              <Box display="flex" alignItems="center">
                <Box as="hr" color="gray.500" width="100%" />
                <Text size="md" textAlign="center" width="100%" margin="0">
                  Not ready to commit?
                </Text>
                <Box as="hr" color="gray.500" width="100%" />
              </Box>
            )}
            <Box key={item.title} display="flex" onClick={() => handleSelect(item, i)} flexDirection={{ base: 'column', md: 'row' }} width="100%" justifyContent="space-between" p={selectedIndex === i ? '22px 18px' : '26px 22px'} gridGap="24px" cursor="pointer" background={selectedIndex !== i && featuredBg} border={selectedIndex === i && '4px solid #0097CD'} borderRadius="8px">
              <Box display="flex" flex={1} flexDirection="column" gridGap="12px" minWidth={{ base: '100%', md: '288px' }} height="fit-content" fontWeight="400">
                <Box fontSize="18px" fontWeight="700">
                  {item?.title}
                </Box>
                <Text
                  size="md"
                  fontWeight="500"
                  mb="6px"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                />
              </Box>
              <Box display="flex" alignItems="center" gridGap="10px">
                <Heading as="span" size="m" lineHeight="1" textTransform="uppercase" color="blue.default">
                  {item?.price}
                </Heading>
              </Box>
            </Box>
          </Fragment>
        ))}
        <Box mt="38px">
          <Button
            variant="default"
            onClick={() => router.push({
              pathname: '/signup',
              query: {
                course: data?.course,
                plan: selectedProps?.type,
              },
            })}
          >
            {selectedItem?.button?.title}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

Pricing.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Pricing;
