function coinChange (num) {
    change = {"q": 0, "d": 0, "n": 0, "p": 0}
    while(num > 0){
        if (num % 25 > 0){
            change[q]+=1
            num-=25
        }
        if (num % 10 > 0){
            change[d]+=1
            num-=10
        }
        if (num % 5 > 0){
            change[n]+=1
            num-=5
        }
        else{
            change[p]+=1
            num-=1
        }
    }
    return change
}