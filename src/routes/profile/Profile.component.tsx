import React from 'react';
import Image from 'components/image';
import Icon from 'components/icon';
import useUser from 'hooks/useUser';
import styles from './Profile.module.scss';

const {
    profile,
    profileMain,
    profilePicture,
    profileContent,
    followersIcon,
    about
} = styles;

export default function Profile(): JSX.Element {
    const {
        name,
        bio,
        avatar_url,
        followers
    } = useUser();

    return (
        <main className={ profile }>
            <div className={ profileMain }>
                <Image
                  src={ avatar_url }
                  className={ profilePicture }
                />
                <div className={ profileContent }>
                    <h1>{ name }</h1>
                    <p>{ bio }</p>
                    <h3>
                        <Icon
                          asset="People"
                          className={ followersIcon }
                        />
                        { followers } Followers
                    </h3>
                </div>
            </div>
            <div className={ about }>
                <h2>About</h2>
                <p>
                    Aliquam aliquet tempus metus et varius.
                    Etiam convallis nunc at magna venenatis, vitae egestas nibh accumsan.
                    Nam auctor neque eget odio pretium, non lobortis sem condimentum.
                    Vestibulum tempus risus vel est tristique, sed malesuada leo facilisis.
                    Etiam sagittis leo eget augue ullamcorper sagittis.
                    Fusce efficitur convallis turpis, sed faucibus diam lobortis ac.
                    Morbi tincidunt purus tincidunt, maximus est vitae, semper erat.
                    Pellentesque dictum in nunc eu porttitor.
                    Integer vitae justo sit amet metus malesuada eleifend.
                </p>
            </div>
        </main>
    );
}
