#pragma strict

function OnMouseDown () 
{
	if (gameObject.transform.position.y > -4 && gameObject.transform.position.y < 4)
	{
		Destroy(gameObject);
	}
}