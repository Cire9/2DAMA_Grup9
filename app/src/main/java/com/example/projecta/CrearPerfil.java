package com.example.projecta;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class CrearPerfil extends AppCompatActivity {
    Button usuari;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.crear_perfil);
        usuari = (Button) findViewById(R.id.BotoUsuari);
        usuari.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(CrearPerfil.this, Login.class));
            }
        });

    }
}
