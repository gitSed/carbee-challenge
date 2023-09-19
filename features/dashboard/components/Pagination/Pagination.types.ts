export interface IPaginationProps {
  isNextDisabled?: boolean;
  isPrevDisabled?: boolean;
  onNextClick: () => void;
  onPrevClick: () => void;
}
