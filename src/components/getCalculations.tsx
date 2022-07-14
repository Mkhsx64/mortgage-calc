const url: string = 'https://api.api-ninjas.com/v1/mortgagecalculator?'

const urlElements: Array<string> = [
    "loan_amount=",
    "&home_value=",
    "&downpayment=",
    "&interest_rate=",
    "&duration_years=",
    "&monthly_hoa=",
    "&annual_property_tax=",
    "&annual_home_insurance="
]

export async function callMortgageAPI(mortgageData: object) {
    let apiURL: string = url;
    let mArray = Object.values(mortgageData);
    for (let i = 0; i <= mArray.length - 1; i++) {
        apiURL += urlElements[i] + mArray[i];
    }
    console.log(apiURL);
    const response = await fetch(apiURL, {
        method: 'GET',
        headers: {
            'X-Api-Key': '6PpBLGUipCmwuuM8HiXvqQ==i198Tfo2IIuhp7TA'
        },
    })
    return response;
}


