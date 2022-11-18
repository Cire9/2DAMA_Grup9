package com.example.projecta;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;

import java.util.ArrayList;
import java.util.List;

public class Home extends AppCompatActivity {
    RecyclerView rvCategorias;
    //AdaptadorCategorias adaptador;
    List<Categoria> listaCategorias = new ArrayList<>();
    ImageButton inici;
    ImageButton fav;
    ImageButton buzon;
    ImageButton perfil;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.home);
        /*rvCategorias = findViewById(R.id.rvCategorias);
        rvCategorias.setLayoutManager(new LinearLayoutManager(Home.this, LinearLayoutManager.HORIZONTAL, false));
        listaCategorias.add(new Categoria(idCategoria:"1", nomCategoria:"Hogar"));
        listaCategorias.add(new Categoria(idCategoria:"2", nomCategoria:"ELectronica"));
        listaCategorias.add(new Categoria(idCategoria:"3", nomCategoria:"Muebles"));
        listaCategorias.add(new Categoria(idCategoria:"4", nomCategoria:"Espacio"));
        listaCategorias.add(new Categoria(idCategoria:"5", nomCategoria:"Xavi"));
        adaptador = new AdaptadorCategoria(Home.this, listaCategorias);
        rvCategorias.setAdapter(adaptador);*/

        inici = (ImageButton) findViewById(R.id.InicioImg);
        inici.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Home.this, Home.class));
            }
        });


        fav = (ImageButton) findViewById(R.id.FavoritosImg);
        fav.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Home.this, Favoritos.class));
            }
        });

        buzon = (ImageButton) findViewById(R.id.BuzonImg);
        buzon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Home.this, Buzon.class));
            }
        });

        ;
        perfil = (ImageButton) findViewById(R.id.PerfilImg);
        perfil.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Home.this, Perfil.class));
            }
        });
    }}