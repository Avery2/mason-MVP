function followAction(followBtn, followed, numFollowers) {
    console.log("follow action")
    console.table({followed})
    if (followed) {
        followBtn.innerHTML = "Unfollow";
        numFollowers -= 1;
    } else {
        followBtn.innerHTML = "Follow";
        numFollowers += 1;
    }

    // hack: updates, this hsouldn't be here
    let followCount = document.getElementById("followcount")
    followCount.innerHTML = numFollowers;
    return [!followed, numFollowers];
}


window.onload = () => {
    let numFollowers = 10;
    let followed = false;
    let followCount = document.getElementById("followcount")
    followCount.innerHTML = numFollowers;
    let followBtn = document.getElementById("followbtn")
    followBtn.addEventListener("click", () => {[followed, numFollowers] = followAction(followBtn, followed, numFollowers)})
}
