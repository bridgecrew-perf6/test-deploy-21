import React, { useEffect } from "react"


const VanillaComments = ({ article_link, article_title, article_id }) => {
    useEffect(() => {
        if (window && document) {
            const vanilla = document.createElement('script');
            vanilla.type = 'text/javascript';
            const vanilla_forum_url = 'https://themix.vanillastaging.com';
            window.vanilla_identifier = article_id;

            window.vanilla_category_id = '36';
            // window.vanilla_url = article_link;
            window.vanilla_url = "http://the-mix-devsite.s3-website.eu-west-2.amazonaws.com/article/become-a-social-entrepreneur/";
            window.vanilla_title = article_title;
            window.timestamp = new Date().getTime();

            vanilla.src = vanilla_forum_url + '/js/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(vanilla);
        }
    }, [])

    return (
        <div className="w-full">
            <div id="vanilla-comments"></div>
        </div>
    );
};

export default VanillaComments;
