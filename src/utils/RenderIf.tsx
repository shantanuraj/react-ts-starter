/**
 * Render one of two components based on the predicate
 */
interface IRenderIfProps {
  // condition to check for rendering
  cond: boolean;
  // component to render predicate is true
  ifComp: JSX.Element;
  // component to render if predicate is false
  elseComp: JSX.Element;
}

const RenderIf = ({ ifComp, elseComp, cond }: IRenderIfProps) => (cond ? ifComp : elseComp);

export default RenderIf;
