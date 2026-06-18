document.addEventListener("DOMContentLoaded",function(){
    const investmentInput = document.getElementById("investment");
    const interestRateInput = document.getElementById("interest-rate");
    const timePeriodInput = document.getElementById("time-period");
    investmentInput.addEventListener("input",function(){
        updatedInvestmentValue(this.value);
    });
    interestRateInput.addEventListener("input",function(){
        updatedInterestValue(this.value);
    });
    timePeriodInput.addEventListener("input",function(){
        updatedTimePeriodValue(this.value);
    });
    });
    function updatedInvestmentValue(value){
        document.getElementById("investment-value").innerText=`${parseFloat(value).toLocaleString('en-IN')}`;
    }
    function updatedInterestValue(value){
        document.getElementById("interest-rate-value").innerText=`${parseFloat(value).toFixed(1)}%`;
    }
    function updatedTimePeriodValue(value){
        document.getElementById("time-period-value").innerText=value;
    }
    
    function calculator(){
        const p=parseFloat(document.getElementById("investment").value);
        const r=parseFloat(document.getElementById("interest-rate").value);
        const t=parseFloat(document.getElementById("time-period").value);
        const n=4;
        const total=p*Math.pow((1 + (r/100)/n),n*t);
        const i=total-p;
        document.getElementById("invested-amount").innerText = `${p.toLocaleString('en-IN')}`;
        document.getElementById("estimated-return").innerText =`${Math.round(i).toLocaleString('en-IN')}`;
        document.getElementById("total-amount").innerText=`${Math.round(total).toLocaleString('en-IN')}`;
    }
    
