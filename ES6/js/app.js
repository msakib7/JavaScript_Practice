document.getElementById('btn-apply-bg').addEventListener('click',function(){
    console.log('conected');
    const friends = document.getElementsByClassName('friend')
    // console.log(friends);
    for(const friend of friends)
    {
        friend.style.backgroundColor = 'lightblue';
    }
})

document.getElementById('btn-add-friend').addEventListener('click',function(){
    console.log('connected');
    const friendsContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.innerHTML = '<h3 class="friend-name">New Friend</h3><p>Something is new here</p>';
    friendsContainer.appendChild(friend);

})