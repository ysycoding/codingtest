// Advanced가 포함된 레퍼런스 코드입니다.
const rockPaperScissors = function (rounds) {

    // rounds 매개변수를 임의로 넣습니다.
    // rounds 변수가 있을 경우 그대로 사용하고, 없다면 3(기본)을 사용합니다.
    rounds = rounds || 3;
    const rps = ['rock', 'paper', 'scissors'];
  
    const outcomes = [];
  =
    let permutate = function (roundsToGo, playedSoFar) {
  
      if (roundsToGo === 0) {
        outcomes.push(playedSoFar);
        return;
      }
  
      for (let i = 0; i < rps.length; i++) {

        let currentPlay = rps[i];

        permutate(roundsToGo - 1, playedSoFar.concat(currentPlay));
  
      }
    };

    permutate(rounds, []);

    return outcomes;
  };