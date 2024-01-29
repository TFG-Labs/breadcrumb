import React from 'react';
import HeadlessLoadingBar from './HeadlessLoadingBar';

type IProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
};

function HeadlessLink(props: IProps) {
  const [showLoadingBar, setShowLoadingBar] = React.useState(false);

  const handleClick = () => {
    setShowLoadingBar(true);
  };

  return (
    <>
      {showLoadingBar && <HeadlessLoadingBar />}
      <a href={props.href} onClick={handleClick} className={props.className}>
        {props.children}
      </a>
    </>
  );
}

export default HeadlessLink;