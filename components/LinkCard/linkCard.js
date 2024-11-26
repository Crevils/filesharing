import React from 'react';
import Link from 'next/link';
import styles from './linkCard.module.scss';

function LinkCard(props) {
    return (
        <div className={styles.linkCard}>
            <i className={props.faStyles} />
            <h1 className='text-red-50 mt-1 mb-4'>{props.title}</h1>
            <p className='text-red-100'>{props.body}</p>
            <div className="flex flex-wrap justify-center gap-6">
                <Link href={props.link}>
                    {props.btn === "primary" ? (
                        <a className="relative">
                            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-red-100"></span>
                            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-red-300 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                                {props.linkText}
                            </span>
                        </a>
                    ) : (
                        <a className="relative">
                            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                                {props.linkText}
                            </span>
                        </a>
                    )}
                </Link>
            </div>
        </div>
    );
}

export default LinkCard;
