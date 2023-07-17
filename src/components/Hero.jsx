import React from "react";
import '../style/Hero.css';

class Hero extends React.Component{
    render() {
        const {name, universe, alterego, occupation, friends, superpowers, url, info} = this.props;
        return (
<div className="hero-card">
    <div className="card-name">{name}</div>
    <div className="card-universe">Вселенная: {universe}</div>
    <div className="card-alterego">Альтер эго: {alterego}</div>
    <div className="card-occupation">Род деятельности: {occupation}</div>
    <div className="card-friends">Друзья: {friends}</div>
    <div className="card-superpowers">Супер-сила: {superpowers}</div>
    <div className="card-image">
        <img src={url} alt="img"/>
        </div>
    <div className="card-info">{info}</div>
</div>
            )
    }
}

export default Hero;