const data = [
{ name:"Megi", year:2010, wind:295, deaths:120, damage:2.1 },
{ name:"Washi", year:2011, wind:120, deaths:1268, damage:1.8 },
{ name:"Bopha", year:2012, wind:280, deaths:1901, damage:2.4 },
{ name:"Haiyan", year:2013, wind:315, deaths:6300, damage:12.9 },
{ name:"Hagupit", year:2014, wind:215, deaths:18, damage:1.0 },
{ name:"Koppu", year:2015, wind:240, deaths:58, damage:0.9 },
{ name:"Haima", year:2016, wind:315, deaths:14, damage:0.8 },
{ name:"Tembin", year:2017, wind:185, deaths:266, damage:1.1 },
{ name:"Mangkhut", year:2018, wind:285, deaths:134, damage:1.6 },
{ name:"Phanfone", year:2019, wind:195, deaths:50, damage:0.7 },
{ name:"Goni", year:2020, wind:315, deaths:31, damage:0.4 }
];

let index = 0;

const maxWind = Math.max(...data.map(d => d.wind));
const maxDeaths = Math.max(...data.map(d => d.deaths));
const maxDamage = Math.max(...data.map(d => d.damage));

function update() {
    const t = data[index];

    document.getElementById("typhoonName").innerText = "Typhoon " + t.name;
    document.getElementById("yearDisplay").innerText = t.year;

    document.getElementById("windBar").style.width =
        (t.wind / maxWind * 100) + "%";

    document.getElementById("deathBar").style.width =
        (t.deaths / maxDeaths * 100) + "%";

    document.getElementById("damageBar").style.width =
        (t.damage / maxDamage * 100) + "%";

    document.getElementById("windText").innerText = t.wind + " km/h";
    document.getElementById("deathText").innerText = t.deaths;
    document.getElementById("damageText").innerText = "₱" + t.damage + "B";
}

function next() {
    index = (index + 1) % data.length;
    update();
}

function prev() {
    index = (index - 1 + data.length) % data.length;
    update();
}

update();