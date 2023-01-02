import styles from './ListingWrapper.module.scss';

const ListingWrapper = (props: { children: JSX.Element[] }) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default ListingWrapper;
