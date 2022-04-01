import type { NextPage } from 'next';
import { Grid, GridItem } from '@chakra-ui/react';
import { useApodSWR } from '../api/apod';
import { Image } from '@chakra-ui/react';
import { useDonkiNoficationsSWR } from '../api/donki';

const Home: NextPage = () => {
  const { data: apod, isLoading } = useApodSWR();
  const { data: donkiNotifications } = useDonkiNoficationsSWR(
    '2020-05-01',
    '2021-05-08'
  );

  console.log('[SWR] APOD Data: ', apod);
  console.log('[SWR] DONKI Data', donkiNotifications);

  return (
    <Grid
      h="200px"
      maxW="800px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      ml="auto"
      mr="auto"
      mt="3rem"
    >
      {!isLoading ? (
        <>
          <GridItem rowSpan={2} colSpan={1} bg="indianred" p="1em">
            <Image
              boxSize="150px"
              objectFit="cover"
              src={apod?.url}
              alt={`Astronomy Picture of the day: ${apod?.title}`}
            />
          </GridItem>
          <GridItem colSpan={2} bg="burlywood" p="1em">
            {apod?.title}
          </GridItem>
          <GridItem colSpan={2} bg="darksalmon" p="1em">
            {apod?.copyright}
          </GridItem>
          <GridItem colSpan={4} bg="darkseagreen" p="1em" lineHeight="1.5em">
            {apod?.explanation}
          </GridItem>
        </>
      ) : (
        <div>{'Is Loading'}</div>
      )}
    </Grid>
  );
};

export default Home;
