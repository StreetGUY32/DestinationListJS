var detailsFrom = document.querySelector("#destination_detail_form");

detailsFrom.addEventListener('submit', handleFormSubmit);


function handleFormSubmit(evt)
{
    evt.preventDefault();

    var destName = evt.target.elements["name"].value;
    var destLocation = evt.target.elements["location"].value;
    var destPhoto = evt.target.elements["photo"].value;
    var desDesc = evt.target.elements["description"].value;

    for (var i = 0; i< detailsFrom.length; i++)
    {
        detailsFrom.elements[i].value  = "";
    }

    //create card here
    var destCard = createDestinationCard (destName, destLocation,  destPhoto, desDesc);


    var wishListContainer = document.getElementById('destination_container');

    if(wishListContainer.children.length === 0)
    {
        document.getElementById('title').innerHTML = "My Wish List";
    }

    // add the card
    document.querySelector("#destination_container").appendChild(destCard);
}

function createDestinationCard (name,location, photoUrl, description) 
{

    var card = document.createElement('div');
    var img = document.createElement('img');
    img.setAttribute('alt', name);

    var constantPhotoUrl = 'images/signpost.jpg';

    if(photoUrl.length === 0)
    {
        img.setAttribute('src',constantPhotoUrl);
    }
    else
    {
        img.setAttribute('src', photoUrl)
    }

    var cardBody = document.createElement("div");
    cardBody.className = "card";

    var Image = document.createElement("img");
    // Image.innerHTML = photoUrl;
    Image.setAttribute('src',photoUrl);
    cardBody.appendChild(Image);

    var cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    var cardSubTitle = document.createElement("h4");
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);

    if (description.length !== 0 )
    {
        var cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    var cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerHTML = "Remove";

    cardDeleteBtn.addEventListener('click', removeDestination)
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;


}

function removeDestination(evt) 
{  
    var card = evt.target.parentElement;
    card.remove();
}