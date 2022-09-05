# Projeto_18_Valex


## Routes

### /createCard
#### input example
##### headers:
x-api-key: zadKLNx.DzvOVjQH01TumGl2urPjPQSxUbf67vs0
##### boby:
{
  "employeeId": "3",
  "type": "transport"
}

### /cardActivate
#### input example
{
  "cardId": 21,
  "securityCode": "859",
  "password": 4565
}


### /unlock
#### input example

{
  "cardId": 21,
  "password": "4565"
}

### /block
#### input example

{
  "cardId": 21,
  "password": "4565"
}

### /balanceTransactions
#### input example

{
  "cardId": 21
}

### /cardRecharge
#### input example

##### headers:
x-api-key: zadKLNx.DzvOVjQH01TumGl2urPjPQSxUbf67vs0
{
  "cardId": 21,
  "amount": 10
}

### /buy
#### input example

{
  "cardId": 21,
  "password": "4565",
   "amount": 0.01,
  "businessesId": 4
}



