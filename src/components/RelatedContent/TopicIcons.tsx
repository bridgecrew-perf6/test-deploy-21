import React from "react";

const TopicIcons = ({ topic, dimentions = "w-10 h-10" }) => {
  const imgTopic = (('/services/' + topic.toLowerCase())
    .replace('&', '')
    .replace(/ +/, ' ')
    .replace(' ', '-') + '.svg');

  let topicToRender = (
      <img
        src={imgTopic}
        alt={topic}
        className={`${dimentions}`}
      />
  );

  return <>{topicToRender}</>;
};

export default TopicIcons;
