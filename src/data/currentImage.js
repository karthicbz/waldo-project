import gameScreenData from "./gameScreenData";

const getCurrentImage = (val)=>{
    console.log(val);
    let currentGameImage = '';
    if(val === 'gameone'){
        currentGameImage = gameScreenData[0].gameone;
    }else if(val === 'gametwo'){
        currentGameImage = gameScreenData[1].gametwo;
    }else if(val === 'gamethree'){
        currentGameImage = gameScreenData[2].gamethree;
    }
    return currentGameImage;
}

export default getCurrentImage;