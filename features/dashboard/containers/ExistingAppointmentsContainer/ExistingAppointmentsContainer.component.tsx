import { useState } from 'react';
import { Flex, Skeleton } from '@chakra-ui/react';

import { Cursor } from '@/modules/shared/domain/entities';
import { Appointment, Pagination } from '@/features/dashboard/components';
import { getExistingAppointments } from '@/modules/dashboard/application';

import { IExistingAppointmentsContainerProps } from './ExistingAppointmentsContainer.types';

function ExistingAppointmentsContainer(
  props: IExistingAppointmentsContainerProps,
) {
  const { fetcher, repository, authToken } = props;

  const [cursorPage, setCursorPage] = useState<
    { cursor: Cursor; type: 'before' | 'after' } | undefined
  >();

  const { isLoading, data } = fetcher.getExistingAppointmentsQuery(
    getExistingAppointments(repository, {
      size: 12,
      token: authToken,
      after: cursorPage?.type === 'after' ? cursorPage?.cursor : undefined,
      before: cursorPage?.type === 'before' ? cursorPage?.cursor : undefined,
    }),
    {
      enabled: !!authToken,
      queryKey: { cursorPage },
    },
  );

  const handleNext = () => {
    setCursorPage({
      cursor: data?.pageInfo.nextCursor as Cursor,
      type: 'after',
    });
  };

  const handlePrev = () => {
    setCursorPage({
      cursor: data?.pageInfo.previousCursor as Cursor,
      type: 'before',
    });
  };

  const renderLoadingState = () => {
    return (
      <Flex flexDir="column">
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          gap="1rem"
          maxH="60vh"
          overflowY="auto"
          padding={{ base: '0.25rem', xl: '1rem' }}
          borderRadius={10}
        >
          {Array.from({ length: 12 }).map((_, index) => {
            return <Skeleton key={index} height="12rem" minW={80} maxW={80} />;
          })}
        </Flex>
        <Flex justifyContent="center" marginTop="3rem">
          <Pagination
            isNextDisabled
            isPrevDisabled
            onNextClick={handleNext}
            onPrevClick={handlePrev}
          />
        </Flex>
      </Flex>
    );
  };

  if (isLoading) {
    return renderLoadingState();
  }

  return (
    <Flex flexDir="column">
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        gap="1rem"
        maxH="60vh"
        overflowY="auto"
        padding={{ base: '0.25rem', xl: '1rem' }}
      >
        {data?.edges.map((edge) => {
          return (
            <Appointment
              key={edge.node.id}
              duration={edge.node.duration}
              service={edge.node.workOrder.service}
              startTime={edge.node.scheduledTime}
              status={edge.node.status}
            />
          );
        })}
      </Flex>
      <Flex justifyContent="center" marginTop="3rem">
        <Pagination
          isNextDisabled={data?.pageInfo.hasNextPage}
          isPrevDisabled={data?.pageInfo.hasPreviousPage}
          onNextClick={handleNext}
          onPrevClick={handlePrev}
        />
      </Flex>
    </Flex>
  );
}

export default ExistingAppointmentsContainer;
