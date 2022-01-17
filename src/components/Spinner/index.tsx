import { SpinnerWrapper, DoubleBounce1, DoubleBounce2 } from "./styles";

export default function Spinner(): JSX.Element {
  return (
    <SpinnerWrapper>
      <DoubleBounce1 />
      <DoubleBounce2 />
    </SpinnerWrapper>
  );
}
