export default secret => guess =>{

    let matches = 0; 
    for (let i = 0; i <(guess.length);i++){
        if (guess[i] === secret[i]){
            matches++;
        }
    }

    const guessRemainder = guess.filter((guessDigit,i)=>(
        guessDigit !== secret[i]
    ));

    const secretRemainder = secret.filter((secretDigit,i)=>(
        secretDigit !== guess[i]
    ));

        const guessBins = [0,1,2,3,4,5].map(d=>(
            guessRemainder.filter(guessDigit=>(
                guessDigit === d
            )).length
        ));

        const secretBins = [0,1,2,3,4,5].map(d=>(
            secretRemainder.filter(secretDigit=>(
                secretDigit === d
            )).length
        ));

        const inexactMatches = guessBins.reduce((total,guessBin,d)=>(
            total + Math.min(guessBin,secretBins[d])
        ),0);

    return [matches,inexactMatches];
    

};