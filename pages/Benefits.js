import { BlockRenderer } from "components/BlockRenderer";
import { getPageStaticProps } from "utils/getPageStaticProps";

export default function Benefits(props) {
  return (
    <div>
      <BlockRenderer blocks={props.blocks} /> {/* Page content */}
    </div>
  );
}

export const getStaticProps = getPageStaticProps;
