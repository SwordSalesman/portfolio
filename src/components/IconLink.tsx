import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import styled from "styled-components";
import toast from "react-hot-toast";

interface IconLinkProps {
  icon: ReactNode;
  link?: string;
  copy?: string;
  children?: ReactNode;
}

const IconLink = (props: IconLinkProps) => {
  var copyText = null;

  const handleClick = async () => {
    if (!props.copy) {
      return;
    }

    if ("clipboard" in navigator) {
      toast(`Copied '${props.copy}'`, {
        duration: 1800,
        style: { color: "#ffffff", background: "#564b75" },
      });
      await navigator.clipboard.writeText(props.copy);
    }
  };

  return (
    <div>
      <Link href={props.link} target="_blank" onClick={handleClick}>
        <Icon>{props.icon}</Icon>
        {props.children ? (
          <>
            <Divider /> {props.children}
          </>
        ) : null}
      </Link>
      {copyText}
    </div>
  );
};

export default IconLink;

const Link = styled.a`
  color: white;
  transition-duration: 0.2s;
  margin: 0.1rem;
  font-size: 1.1rem;
  font-weight: normal;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: rgb(201, 175, 245, 1);
  }
`;

const Divider = styled.div`
  margin: 0.2rem;
`;

const Icon = styled.div`
  font-size: 1.8rem;
  line-height: 1rem;
`;
