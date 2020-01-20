

document.addEventListener("DOMContentLoaded", () => {
  const secondHandTag = document.querySelector(`.second-hand`);
  const minuteHandTag = document.querySelector(`.min-hand`);
  const hourHandTag = document.querySelector(`.hour-hand`);

	function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    //we want at 60 sec to be 360 deg or 100%
    //60/60 is 1 or 100%
    //1 seconds/60 is 1%
    //multiply by 360 so if 25% we are 25% around the circle
    ////offset by add 90 deg as our initial was 90 to make  div vertical
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHandTag.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) +90
    minuteHandTag.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours()
    const hoursDegrees = ((hours / 12) *360) + ((minutes/60)*30) + 90
    hourHandTag.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(minuteHandTag.transform)
	}
  setInterval(setDate, 1000);

})
