import data from '@/data/header.json';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

class SocialLinks {
    constructor() {
        this.links = (data?.SocialLinks || []).map((link) => {
            const iconMap = {
                facebook: FaFacebook,
                instagram: FaInstagram,
                linkedin: FaLinkedin,
            };
            return {
                ...link,
                Icon: iconMap[link.id] || null,
            };
        });
    }
    getLinks() {
        return this.links;
    }
}

export default new SocialLinks;