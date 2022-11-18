package com.example.projecta;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;

public class Perfil extends AppCompatActivity{


    ImageButton inici;
    ImageButton fav;
    ImageButton buzon;
    ImageButton perfil;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.perfil);
        inici = (ImageButton) findViewById(R.id.InicioImg4);
        inici.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Perfil.this, Home.class));
            }
        });


        fav = (ImageButton) findViewById(R.id.FavoritosImg4);
        fav.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Perfil.this, Favoritos.class));
            }
        });

        buzon = (ImageButton)  findViewById(R.id.BuzonImg4);
        buzon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Perfil.this, Buzon.class));
            }
        });

        ;
        perfil = (ImageButton) findViewById(R.id.PerfilImg4);
        perfil.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Perfil.this, Perfil.class));
            }
        });
    }
}