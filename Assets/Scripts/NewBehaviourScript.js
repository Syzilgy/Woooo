﻿#pragma strict

public var points : int = 5;
public var pickedUpBy : String = "Player";

function OnTriggerEnter2D(other : Collider2D)
{

	if ( other.CompareTaf(pickedUpBy) )
	{
		Debug.Log("Coins! Worth " + points + "points!");

		Destroy(gameObject);

		}

	}