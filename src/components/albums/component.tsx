import React from "react";
import { Album } from "./album/component";

import styles from "./style.module.scss";
import { IAlbum } from "../../types/types";

type AlbumProps = {
	data: IAlbum[];
}

export const Albums:React.FC<AlbumProps> = ({data}):JSX.Element => {
	return (
		<div className={styles.albums}>
			{
				data
					.map((item: any) => <Album
							title={item.title}
							key={item.id}
						/>)
			}
		</div>
	);
}