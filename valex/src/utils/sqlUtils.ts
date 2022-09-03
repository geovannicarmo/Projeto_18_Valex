import Cryptr from 'cryptr'
import dayjs from 'dayjs';

export function mapObjectToUpdateQuery({ 
  
  object, 
  offset = 1 }:
  {
    object:{}
    offset: number;
  }
  ) 



{
  const objectColumns = Object.keys(object)
    .map((key, index) => `"${key}"=$${index + offset}`)
    .join(",");
  const objectValues = Object.values(object);

  return { objectColumns, objectValues };
}


export function encryptWhithCryptr(cvv: string){


  let secretyKeycryptr = process.env.SECRETYKEYCRYPTR

  if(typeof(secretyKeycryptr)!=="string"){
    secretyKeycryptr = "fcrwsefvhbgtfrsgvvsvceadsre" 
  }

  const cryptr = new Cryptr(secretyKeycryptr);

  return cryptr.encrypt(cvv);

}

export function decryptWhithCryptr(cvv: string){


  let secretyKeycryptr = process.env.SECRETYKEYCRYPTR

  if(typeof(secretyKeycryptr)!=="string"){
    secretyKeycryptr = "fcrwsefvhbgtfrsgvvsvceadsre" 
  }

  const cryptr = new Cryptr(secretyKeycryptr);

  return cryptr.decrypt(cvv);

}


export function verifyexpired(expirationDate: string){

  let today = dayjs().format('MM YYYY')
  const todayArray = today.split(" ");
  const expirationDateArray = expirationDate.split(" ");


  if(todayArray[1]>expirationDateArray[1]|| 
      (todayArray[1]===expirationDateArray[1]&&todayArray[0]>expirationDateArray[0])
      ){
          return true
  }
  return false
}