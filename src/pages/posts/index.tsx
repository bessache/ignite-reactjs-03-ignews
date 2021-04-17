import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title> 
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur dignissim imperdiet. Mauris ullamcorper gravida nibh, et venenatis quam mattis quis. Aliquam eleifend eu diam tempor mattis. Mauris a bibendum dolor, eget pellentesque augue. </p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur dignissim imperdiet. Mauris ullamcorper gravida nibh, et venenatis quam mattis quis. Aliquam eleifend eu diam tempor mattis. Mauris a bibendum dolor, eget pellentesque augue. </p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur dignissim imperdiet. </p>
                    </a>
                </div>
            </main>
        </>

    );
}