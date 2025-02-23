import data from '@/data/header.json';
import FacebookIcon from './icons/socials/facebook.svg';
import InstagramIcon from './icons/socials/instagram.svg';
import LinkedInIcon from './icons/socials/linkedin.svg';

class SocialLinks {
    constructor() {
        this.links = data.socialLinks.map((link) => {
            const iconMap = {
                facebook: FacebookIcon,
                instagram: InstagramIcon,
                linkedin: LinkedInIcon,
            };

            return {
                ...link,
                Icon: iconMap[link.id],
            };
        });
    }
    getLinks() {
        return this.links;
    }
}

export default new SocialLinks();