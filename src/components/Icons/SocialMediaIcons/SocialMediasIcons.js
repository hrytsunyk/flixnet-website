import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebookF, faGooglePlusG, faLinkedinIn,
    faTwitter,

} from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom";


const SocialMediasIcons = () => {
    return (
        <div className={'SocialFather'}>
            <ul className={'SocialUl'}>
                <Link className={'SocialLink'} to={'https://facebook.com'} target={"_blank"}>
                    <li className={'SocialLi'} id="li1">
                        <FontAwesomeIcon className={'icon'} icon={faFacebookF} size={'2xs'}/>
                    </li>
                </Link>

                <Link className={'SocialLink'} to={'https://twitter.com'} target={"_blank"}>
                    <li className={'SocialLi'} id="li2">
                        <FontAwesomeIcon className={'icon'} icon={faTwitter} size={'2xs'}/>
                    </li>
                </Link>

                <Link className={'SocialLink'} to={'https://linkedin.com'} target={"_blank"}>
                    <li className={'SocialLi'} id="li3">
                        <FontAwesomeIcon className={'icon'} id={'Li2'} icon={faLinkedinIn} size={'2xs'}/>
                    </li>
                </Link>

                <Link className={'SocialLink'} to={'https://google.com'} target={"_blank"}>
                    <li className={'SocialLi'} id="li4">
                        <FontAwesomeIcon className={'icon'} icon={faGooglePlusG} size={'2xs'}/>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export {
    SocialMediasIcons
}