import { Button, Flex } from '@chakra-ui/react';

import { IPaginationProps } from './Pagination.types';

function Pagination(props: IPaginationProps) {
  const {
    isNextDisabled = true,
    isPrevDisabled = true,
    onNextClick,
    onPrevClick,
  } = props;

  return (
    <Flex gap="1rem">
      <Button onClick={onPrevClick} disabled={isPrevDisabled}>
        Previous
      </Button>
      <Button onClick={onNextClick} disabled={isNextDisabled}>
        Next
      </Button>
    </Flex>
  );
}

export default Pagination;
