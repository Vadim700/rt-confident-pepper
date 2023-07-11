import React from "react";

import styles from "./style.module.scss";

type AlbumProps = {
	title: string;
}

export const Album: React.FC<AlbumProps> = ({ title }):JSX.Element => {
	
	return (
		<article className={styles.albums__item}>
			<h2 className={styles.albums__title}>{ title }</h2>
			<h3 className={ styles.albums__name}>albums name</h3>
		</article>
	);
}