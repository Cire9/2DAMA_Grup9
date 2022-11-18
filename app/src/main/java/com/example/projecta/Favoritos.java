package com.example.projecta;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;

public class Favoritos extends AppCompatActivity {


    ImageButton inici;
    ImageButton fav;
    ImageButton buzon;
    ImageButton perfil;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.favoritos);
        inici = (ImageButton) findViewById(R.id.InicioImg2);
        inici.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Favoritos.this, Home.class));
            }
        });


        fav = (ImageButton) findViewById(R.id.FavoritosImg2);
        fav.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Favoritos.this, Favoritos.class));
            }
        });

        buzon = (ImageButton)  findViewById(R.id.BuzonImg2);
        buzon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Favoritos.this, Buzon.class));
            }
        });

        ;
        perfil = (ImageButton) findViewById(R.id.PerfilImg2);
        perfil.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Favoritos.this, Perfil.class));
            }
        });
    }
}