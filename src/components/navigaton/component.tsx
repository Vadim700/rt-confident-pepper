
import React from "react";
import styles from './style.module.scss';

type NavigationProps = {
	pageNumber: any;
}

const pages: number[] = Array(10).fill(1).map((v, i) => i + 1);

export const Navigation: React.FC<NavigationProps> = ({ pageNumber }) => {

	// const [pageNumber, setPageNumber] = useState(1);
	
	const handlerClick = (event: any) => {
		pageNumber(event.target.childNodes[0].data * 10 - 1)
		console.log(event.target.childNodes[0].data * 10 - 1)
	}

	
	return (
		<nav className={styles.navigation}>
			<button className={ styles.navigation__prev}></button>
			{pages
				.map((item, index) => (
					<span className={styles.navigation__item} key={index}>
						<button
							className={styles.navigation__link}
							onClick={handlerClick}
						>
							{item}
						</button>
					</span>))
			}
			<button className={ styles.navigation__next}></button>
		</nav>
	)
}

