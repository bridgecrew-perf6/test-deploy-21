import React from "react";

const svgIconsSize = {
    width: "25px",
    height: "25px",
    borderRadius: "5px",
    marginRight: "7px",
    marginBottom: "1px",
}

const topicStyle = {
    color: "black",
}

const TopicSmallIcons = ({ topic }) => {
    const iconSrc = (('/services/' + topic.toLowerCase())
        .replace('&', '')
        .replace(/ +/, ' ')
        .replace(' ', '-') + '.svg');

    let topicToRender = (
        <div className="flex items-center">
            <img
                src={iconSrc}
                alt={topic}
                style={svgIconsSize}
            />
            <span style={topicStyle}>{topic}</span>
        </div>
    );

    return <>{topicToRender}</>;
};

export default TopicSmallIcons;
