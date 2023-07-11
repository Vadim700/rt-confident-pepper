import React from "react";

export interface IPosts {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export interface IAdress{
	street: string;
	city: string;
	zipcode: string;
}

export interface IUser {
	id: number;
	name: string;
	email: string;
	adress: IAdress;
}

export interface IAlbum {
	userId: number;
	id: number;
	title: string;
}

export interface ITodos {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}