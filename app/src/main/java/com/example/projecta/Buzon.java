package com.example.projecta;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;

public class Buzon extends AppCompatActivity {


    ImageButton inici;
    ImageButton fav;
    ImageButton buzon;
    ImageButton perfil;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.buzon);
        inici = (ImageButton) findViewById(R.id.InicioImg3);
        inici.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Buzon.this, Home.class));
            }
        });


        fav = (ImageButton) findViewById(R.id.FavoritosImg3);
        fav.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Buzon.this, Favoritos.class));
            }
        });

        buzon = (ImageButton)  findViewById(R.id.BuzonImg3);
        buzon.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Buzon.this, Buzon.class));
            }
        });

        ;
        perfil = (ImageButton) findViewById(R.id.PerfilImg3);
        perfil.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(Buzon.this, Perfil.class));
            }
        });
    }
}