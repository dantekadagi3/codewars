// okay we are going to use sets first we concatenate the strings  into a single string then 
// we split it then we loop through it while adding each elenent into the set


function longest(s1, s2) {
    // your code
    let set=new Set()
    let full=s1.concat(s2)
    let fullArr=full.split('')

    for(i=0;i<fullArr.length;i++){
        set.add(fullArr[i])
    }

    let uniqueArr=Array.from(set)
    let sorted=uniqueArr.sort()

    return sorted.join("")

  }

  let s1="weefufhrvbeuv"
  let s2="dweufierufbefeufbe"

  let all=longest(s1,s2)
  console.log(all)