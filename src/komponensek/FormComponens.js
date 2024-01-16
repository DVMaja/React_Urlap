import { useState } from "react"
export default function FormComponens(props) {

    //const { nev, setNev } = useState("");
    //már nem ezeket használjuk
    //const { szulev, setEv } = useState(2000);

    const { obj, setObj } = useState({
        nev: "",
        szulev: 2000,
    })

    function valtozasKezeles(event) {
        console.log(event.target.value);
        let sv = {...obj}//segéd változó

        sv[event.target.id] = event.target.value;
        setObj({...sv});

    }
    function adatkuld(event) {
        event.preventDefault();
        console.log(obj);
        props.adatkuld(obj);
    }

    return (
        <form onSubmit={adatkuld}>
            <div>
                <label htmlFor="nev">Név</label>
                <input type="text" id="nev" name="nev"
                    placeholder="vezetéknév keresztnév"
                    value={obj.nev}
                    onChange={valtozasKezeles}></input>
            </div>

            <div>
                <label htmlFor="szulev">Születési év</label>
                <input type="number" id="szulev" name="szulev" value={obj.szulev} min={1980} max={2024}
                    onChange={valtozasKezeles}></input>
            </div>

        </form>
    )
}