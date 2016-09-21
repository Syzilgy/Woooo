#pragma strict

public var g0bj : GameObject;

function Start () {
CreateRandom();
}

function CreateRandom() {

	var x : float;
	var y : float;

	x = Random.Range(-7.0,7/0);

	y = 6;

	Instantiate( g0bj, Vector3(x, y, 0) Quaternion.identity );

}