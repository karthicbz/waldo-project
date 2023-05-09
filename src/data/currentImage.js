import gameScreenData from "./gameScreenData";

const getCurrentImage = (val)=>{
    let currentGameImage = '';
    if(val === 'gameone'){
        currentGameImage = gameScreenData[0].gameone;
    }else if(val === 'gametwo'){
        currentGameImage = gameScreenData[0].gametwo;
    }else if(val === 'gamethree'){
        currentGameImage = gameScreenData[0].gamethree;
    }
    return currentGameImage;
}

export default getCurrentImage;